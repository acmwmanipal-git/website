import React, {
  Children,
  cloneElement,
  forwardRef,
  isValidElement,
  useMemo,
  useRef,
} from "react";
import { useLayoutEffect } from "react";
import gsap from "gsap";
import "./CardSwap.css";

export const Card = forwardRef(({ customClass, ...rest }, ref) => (
  <div
    ref={ref}
    {...rest}
    className={`card ${customClass ?? ""} ${rest.className ?? ""}`.trim()}
  />
));
Card.displayName = "Card";

const makeSlot = (i, distX, distY, total) => ({
  x: i * distX,
  y: -i * distY,
  z: -Math.min(i * distX * 1.2, 120),
  rotationZ: i * 0.6,
  zIndex: total - i,
});

const CardSwap = ({
  width = 500,
  height = 400,
  cardDistance = 60,
  verticalDistance = 70,
  children,
}) => {
  const childArr = useMemo(() => Children.toArray(children), [children]);
  const refs = useMemo(() => childArr.map(() => React.createRef()), [childArr.length]);
  const order = useRef(Array.from({ length: childArr.length }, (_, i) => i));
  const container = useRef(null);

  const swap = () => {
    if (order.current.length < 2) return;

    const [front, ...rest] = order.current;
    const elFront = refs[front].current;
    const tl = gsap.timeline({ defaults: { duration: 0.8, ease: "power2.inOut" } });

    tl.to(elFront, {
      y: "+=250",
      rotationZ: -5,
      scale: 0.98,
    });

    rest.forEach((idx, i) => {
      const el = refs[idx].current;
      const slot = makeSlot(i, cardDistance, verticalDistance, refs.length);

      tl.set(el, { zIndex: slot.zIndex });
      tl.to(
        el,
        {
          x: slot.x,
          y: slot.y,
          z: slot.z,
          rotationZ: slot.rotationZ,
          scale: 1 - i * 0.015,
        },
        "-=0.62"
      );
    });

    const backSlot = makeSlot(rest.length, cardDistance, verticalDistance, refs.length);

    tl.set(elFront, { zIndex: 1 });
    tl.to(
      elFront,
      {
        x: backSlot.x,
        y: backSlot.y,
        z: backSlot.z,
        rotationZ: backSlot.rotationZ,
        scale: 1 - rest.length * 0.015,
      },
      "-=0.62"
    );

    tl.call(() => {
      order.current = [...rest, front];
    });
  };

  useLayoutEffect(() => {
    const total = refs.length;

    refs.forEach((r, i) => {
      const slot = makeSlot(i, cardDistance, verticalDistance, total);

      gsap.set(r.current, {
        x: slot.x,
        y: slot.y,
        z: slot.z,
        rotationZ: slot.rotationZ,
        scale: 1 - i * 0.015,
        zIndex: slot.zIndex,
        xPercent: -50,
        yPercent: -50,
        transformOrigin: "center",
      });
    });

    gsap.set(container.current, { opacity: 1 });
  }, [cardDistance, verticalDistance, refs]);

  const rendered = childArr.map((child, i) =>
    isValidElement(child)
      ? cloneElement(child, {
          key: i,
          ref: refs[i],
          style: { width, height, ...(child.props.style ?? {}) },
          onClick: (event) => {
            child.props.onClick?.(event);
            if (!event.defaultPrevented) {
              swap();
            }
          },
        })
      : child
  );

  return (
    <div
      ref={container}
      className="card-swap-container"
      style={{ width, height }}
    >
      {rendered}
    </div>
  );
};

export default CardSwap;
