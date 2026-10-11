import { useEffect, useRef } from "react";
import "./styles/Cursor.css";

const Cursor = () => {
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    if (!cursor) return;

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const mouse = { x: 0, y: 0 };
    const position = { x: 0, y: 0 };
    let visible = false;
    let frame = 0;
    let previousTime = 0;

    const hide = () => {
      visible = false;
      cursor.classList.remove("cursor-visible");
    };

    const move = (event: PointerEvent) => {
      if (event.pointerType === "touch") return;
      mouse.x = event.clientX;
      mouse.y = event.clientY;
      if (!visible) {
        position.x = mouse.x;
        position.y = mouse.y;
        visible = true;
        cursor.classList.add("cursor-visible");
      }
      const target = event.target instanceof Element
        ? event.target.closest<HTMLElement>("[data-cursor]")
        : null;
      cursor.classList.toggle("cursor-disable", target?.dataset.cursor === "disable");
      cursor.classList.toggle("cursor-icons", target?.dataset.cursor === "icons");
    };

    const animate = (time: number) => {
      const elapsed = previousTime ? Math.min(time - previousTime, 64) : 16.67;
      previousTime = time;
      const follow = reducedMotion.matches ? 1 : 1 - Math.exp(-elapsed / 45);
      position.x += (mouse.x - position.x) * follow;
      position.y += (mouse.y - position.y) * follow;
      const dx = mouse.x - position.x;
      const dy = mouse.y - position.y;
      const distance = Math.hypot(dx, dy);
      // The dot stays inside the ring; its flame stretches behind it.
      const offset = Math.min(distance * 0.16, 9);
      const trail = reducedMotion.matches ? 0 : Math.min(distance * 2.4, 140);
      const angle = Math.atan2(dy, dx);
      cursor.style.transform = `translate3d(${position.x}px, ${position.y}px, 0)`;
      cursor.style.setProperty("--dot-x", `${Math.cos(angle) * offset}px`);
      cursor.style.setProperty("--dot-y", `${Math.sin(angle) * offset}px`);
      cursor.style.setProperty("--trail-angle", `${angle}rad`);
      cursor.style.setProperty("--trail-length", `${trail}px`);
      cursor.style.setProperty("--trail-opacity", `${Math.min(trail / 8, 1)}`);
      frame = requestAnimationFrame(animate);
    };

    document.addEventListener("pointermove", move);
    document.documentElement.addEventListener("pointerleave", hide);
    window.addEventListener("blur", hide);
    frame = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(frame);
      document.removeEventListener("pointermove", move);
      document.documentElement.removeEventListener("pointerleave", hide);
      window.removeEventListener("blur", hide);
    };
  }, []);

  return (
    <div className="cursor-main" ref={cursorRef} aria-hidden="true">
      <div className="cursor-ring" />
      <div className="cursor-dot">
        <div className="cursor-trail" />
      </div>
    </div>
  );
};

export default Cursor;
