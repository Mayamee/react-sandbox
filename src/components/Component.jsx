import { useTheme, useThemeUpdate } from "../hooks/ThemeContext";

const Component = () => {
  const darkMode = useTheme();
  const updateTheme = useThemeUpdate();
  const themeStyles = {
    backgroundColor: darkMode ? "#333" : "#CCC",
    color: darkMode ? "#CCC" : "#333",
    padding: "2rem",
    margin: "2rem",
  };
  return (
    <>
      <button onClick={updateTheme}>Toggle Theme</button>
      <div style={themeStyles} id="component">
        Component
      </div>
    </>
  );
};

export default Component;
