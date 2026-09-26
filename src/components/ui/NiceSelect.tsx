"use client";
import { useState, useRef, useCallback } from "react";
import { useClickAway } from "react-use";

export type NiceSelectOption = {
  value: string | number;
  text: string;
};

type Props = {
  options: NiceSelectOption[];
  placeholder?: string;
  className?: string;
  name?: string;
  onChange: (item: NiceSelectOption, name?: string) => void;
};

const NiceSelect: React.FC<Props> = ({
  options,
  placeholder = "Select Services",
  className = "",
  onChange,
  name,
}) => {
  const [open, setOpen] = useState(false);
  const [current, setCurrent] = useState<NiceSelectOption | null>(null);

  const ref = useRef<HTMLDivElement | null>(null);

  const close = useCallback(() => setOpen(false), []);
  useClickAway(ref, close);

  const selectHandler = (item: NiceSelectOption) => {
    setCurrent(item);
    onChange(item, name);
    setOpen(false);
  };

  return (
    <div
      ref={ref}
      className={`nice-select tp-select ${open ? "open" : ""} ${className}`}
      onClick={() => setOpen((prev) => !prev)}
    >
      <span className="current">
        {current?.text || placeholder}
      </span>

      {open && (
        <ul className="list">
          {options.map((item) => (
            <li
              key={item.value}
              data-value={item.value}
              className={`option ${item.value === current?.value ? "selected focus" : ""
                }`}
              onClick={(e) => {
                e.stopPropagation();
                selectHandler(item);
              }}
            >
              {item.text}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default NiceSelect;