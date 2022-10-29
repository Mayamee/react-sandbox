import { memo, useEffect } from "react";

const ListItem = ({ onClick, text }) => {
  useEffect(() => {
    console.log("onClicked");
  }, [onClick]);

  return (
    <li
      onClick={onClick}
      style={{
        cursor: "pointer",
        userSelect: "none",
      }}
    >
      {text}
    </li>
  );
};

export default memo(ListItem);
// рендерится только при изменении text или onClick в props