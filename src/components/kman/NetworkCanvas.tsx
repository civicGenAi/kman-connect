import { useEffect, useRef, useCallback } from "react";

interface Node {
  x: number;
  y: number;
  vx: number;
  vy: number;
  color: string;
  radius: number;
}

const COLORS = ["#F0A800", "#1B3045", "#D4920A", "#2A4A6B", "#FFD700"];

export const NetworkCanvas = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const nodesRef = useRef<Node[]>([]);
  const mouseRef = useRef({ x: -1000, y: -1000 });
  const animRef = useRef<number>(0);
  const isTouchRef = useRef(false);

  const initNodes = useCallback((w: number, h: number) => {
    const isMobile = w < 768;
    const count = isMobile ? 60 : 120;
    const nodes: Node[] = [];
    for (let i = 0; i < count; i++) {
      nodes.push({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        color: COLORS[Math.floor(Math.random() * COLORS.length)],
        radius: Math.random() * 2 + 1.5,
      });
    }
    nodesRef.current = nodes;
  }, []);

  useEffect(() => {
    isTouchRef.current = window.matchMedia("(hover: none)").matches;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      if (nodesRef.current.length === 0) {
        initNodes(canvas.width, canvas.height);
      }
    };
    resize();
    window.addEventListener("resize", resize);

    const onMouse = (e: MouseEvent) => {
      if (!isTouchRef.current) {
        mouseRef.current = { x: e.clientX, y: e.clientY };
      }
    };
    window.addEventListener("mousemove", onMouse);

    const draw = () => {
      const w = canvas.width;
      const h = canvas.height;
      const mx = mouseRef.current.x;
      const my = mouseRef.current.y;
      const nodes = nodesRef.current;

      ctx.clearRect(0, 0, w, h);

      // Update positions
      for (const n of nodes) {
        // Mouse repulsion
        const dx = n.x - mx;
        const dy = n.y - my;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 120 && dist > 0) {
          const force = (120 - dist) / 120 * 2;
          n.vx += (dx / dist) * force * 0.05;
          n.vy += (dy / dist) * force * 0.05;
        }

        // Dampen velocity
        n.vx *= 0.99;
        n.vy *= 0.99;

        n.x += n.vx;
        n.y += n.vy;

        // Bounce
        if (n.x < 0 || n.x > w) n.vx *= -1;
        if (n.y < 0 || n.y > h) n.vy *= -1;
        n.x = Math.max(0, Math.min(w, n.x));
        n.y = Math.max(0, Math.min(h, n.y));
      }

      // Draw connections
      const threshold = 150;
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const a = nodes[i];
          const b = nodes[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < threshold) {
            const midX = (a.x + b.x) / 2;
            const midY = (a.y + b.y) / 2;
            const mouseDist = Math.sqrt((midX - mx) ** 2 + (midY - my) ** 2);
            const nearMouse = mouseDist < 150;
            const alpha = (1 - dist / threshold) * (nearMouse ? 0.5 : 0.12);
            ctx.strokeStyle = nearMouse
              ? `rgba(240, 168, 0, ${alpha})`
              : `rgba(27, 48, 69, ${alpha})`;
            ctx.lineWidth = nearMouse ? 1.5 : 0.8;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
      }

      // Draw nodes
      for (const n of nodes) {
        const mouseDist = Math.sqrt((n.x - mx) ** 2 + (n.y - my) ** 2);
        const nearMouse = mouseDist < 120;
        const glowRadius = nearMouse ? n.radius * 3 : n.radius * 1.5;

        // Glow
        const gradient = ctx.createRadialGradient(n.x, n.y, 0, n.x, n.y, glowRadius);
        gradient.addColorStop(0, n.color + (nearMouse ? "80" : "40"));
        gradient.addColorStop(1, n.color + "00");
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(n.x, n.y, glowRadius, 0, Math.PI * 2);
        ctx.fill();

        // Core
        ctx.fillStyle = n.color + (nearMouse ? "FF" : "B0");
        ctx.beginPath();
        ctx.arc(n.x, n.y, nearMouse ? n.radius * 1.5 : n.radius, 0, Math.PI * 2);
        ctx.fill();
      }

      animRef.current = requestAnimationFrame(draw);
    };

    animRef.current = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(animRef.current);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMouse);
    };
  }, [initNodes]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full pointer-events-none"
      style={{ zIndex: 0 }}
    />
  );
};
