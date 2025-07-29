type TextAreaProps = React.TextareaHTMLAttributes<HTMLTextAreaElement> & {};

const TextArea = ({ ...textAreaProps }: TextAreaProps) => {
  return <textarea {...textAreaProps} placeholder="Type your text here..." />;
};

export default TextArea;
