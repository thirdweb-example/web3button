import React from "react";
import Highlight, { defaultProps } from "prism-react-renderer";
import darkTheme from "prism-react-renderer/themes/oceanicNext";
import styles from "../styles/Home.module.css";

export default function DemoCodeSnippet({ text }) {
  return (
    <div className={styles.codeSnippet}>
      <Highlight {...defaultProps} code={text} language="jsx" theme={darkTheme}>
        {({ className, style, tokens, getLineProps, getTokenProps }) => (
          <pre className={className} style={style}>
            {tokens.map((line, i) => (
              // eslint-disable-next-line react/jsx-key
              <div {...getLineProps({ line, key: i })}>
                {line.map((token, key) => (
                  // eslint-disable-next-line react/jsx-key
                  <span {...getTokenProps({ token, key })} />
                ))}
              </div>
            ))}
          </pre>
        )}
      </Highlight>
    </div>
  );
}
