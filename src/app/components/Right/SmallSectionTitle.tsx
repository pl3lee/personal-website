interface SmallSectionTitleProps {
  title: string;
}
const SmallSectionTitle = ({ title }: SmallSectionTitleProps) => {
  return (
    <div className="small-section-title-container">
      <h1 className="small-section-title">{title}</h1>
    </div>
  );
};

export default SmallSectionTitle;
