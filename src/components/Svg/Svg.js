const Svg = (props) => {
  return (
    <div>
      <svg
        className={props.svgClassNames}
        xmlns="http://www.w3.org/2000/svg"
        width={props.width}
        height={props.height}
        viewBox={props.viewBox}
      >
        <title>{props.title}</title>

        {props.rect && (
          <rect
            x={props.rect.x}
            y={props.rect.y}
            width={props.rect.width}
            height={props.rect.height}
            rx={props.rect.rx}
            fillOpacity={props.fillOpacity}
            fill={props.color}
            stroke={props.strokeColor}
            strokeWidth={props.strokeWidth}
          ></rect>
        )}

        {props.drawingPath &&
          props.drawingPath.map((d, i) => {
            return (
              <path
                key={i}
                className={props.pathClassNames}
                fillRule="evenodd"
                clipRule="evenodd"
                d={d}
                fill={props.color}
                strokeWidth={!props.rect ? props.strokeWidth : null}
                fillOpacity={!props.rect ? props.fillOpacity : null}
                stroke={!props.rect ? props.strokeColor : null}
              ></path>
            );
          })}
      </svg>
    </div>
  );
};
export default Svg;
