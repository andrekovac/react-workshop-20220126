import "./styles.css";

type WrapperProps = {
  title: string;
};

const Wrapper: React.FC<WrapperProps> = ({ title, children }) => {
  return (
    <div className="outer">
      <h2 className="title">{title}</h2>
      {children}
    </div>
  );
};

export default Wrapper;
