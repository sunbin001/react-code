const supportSymbol = typeof Symbol === "function" && Symbol.for;

export const REACT_ELEMENT_TYPE = supportSymbol
  ? Symbol.for("react.element")
  : 0xeac7;

// 为了防止其他人滥用 reactElement, 将reactElement 定义为一个独一无二的值
