import { useState } from "react";
import { useVisuallyHidden } from "@react-aria/visually-hidden";

type VisibleState = Record<string, boolean>;

function useToggleVisibility() {
  const [visibleState, setVisibleState] = useState<VisibleState>({});

  const visuallyhiddenprops = useVisuallyHidden();

  const toggleVisibility = (id: string) => {
    setVisibleState((prev) => ({
      ...prev,
      [id]: !prev[id], 
    }));
  };

  const toggleProps = (id: string) => ({
    ...visuallyhiddenprops,
    role: "button",
    tabIndex: 0,
    onClick: () => toggleVisibility(id),
    onKeyDown: (e: React.KeyboardEvent) => {
      if (e.key === "Enter" || e.key === " ") {
        toggleVisibility(id);
      }
    },
  });

  return {
    visibleState,
    toggleProps,
  };
}

export default useToggleVisibility;
