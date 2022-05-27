const Svg = ({
  drawingPath,
  svgClassNames,
  width,
  height,
  viewBox,
  title,
  rect,
  fillOpacity,
  color,
  strokeColor,
  strokeWidth,
  pathClassNames,
  circle,
}) => {
  return (
    <div>
      <svg
        className={svgClassNames}
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={height}
        viewBox={viewBox}
      >
        <title>{title}</title>

        {rect && (
          <rect
            x={rect.x}
            y={rect.y}
            width={rect.width}
            height={rect.height}
            rx={rect.rx}
            fillOpacity={fillOpacity}
            fill={color}
            stroke={strokeColor}
            strokeWidth={strokeWidth}
          ></rect>
        )}

        {drawingPath &&
          drawingPath.map((d, i) => {
            return (
              <path
                key={i}
                className={pathClassNames}
                fillRule="evenodd"
                clipRule="evenodd"
                d={d}
                fill={color}
                strokeWidth={strokeWidth}
                fillOpacity={fillOpacity}
                stroke={strokeColor}
              ></path>
            );
          })}

        {circle && (
          <circle
            cx={circle.cx}
            cy={circle.cy}
            r={circle.r}
            fill={color}
            fillOpacity={fillOpacity}
            stroke={strokeColor}
            strokeWidth={strokeWidth}
          ></circle>
        )}
      </svg>
    </div>
  );
};
export default Svg;
