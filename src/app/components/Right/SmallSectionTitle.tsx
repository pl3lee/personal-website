interface SmallSectionTitleProps {
  title: string;
}
const SmallSectionTitle = ({ title }: SmallSectionTitleProps) => {
  return (
    <div className="small-section-title-container">
      <div className="small-section-title">{title}</div>
    </div>
  );
};

export default SmallSectionTitle;
