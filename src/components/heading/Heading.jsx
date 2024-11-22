import React from "react";

const SpanList = function (props) {
  const { data = [], type } = props;

  return (
    data.length &&
    data.map((item) => {
      return (
        <>
          {" "}
          {item &&
            item
              .trim()
              .split(" ")
              .map((words) => {
                return (
                  <>
                    {words
                      .trim()
                      .split("")
                      .map((word) => {
                        return (
                          <span
                          className="bounce-text"
                            style={{ wordBreak: "keep-all", fontFamily : 'inherit', fontWeight : 'bold' }}
                            key={word}
                          >
                            {word}{" "}
                          </span>
                        );
                      })}
                    &nbsp;
                  </>
                );
              })}
          {"    "}
          <br />
        </>
      );
    })
  );
};

export default function Heading(props) {
  let { title, sx, cls } = props;

  const t_list = title.split("\n");

  return (
    <h1 style={{ ...sx, fontFamily : "'Fredoka One', cursive"}} className={`${cls} one-time-bounce`} >
      <SpanList data={t_list} />
    </h1>
  );
}
