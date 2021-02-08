interface SectionProps {
  company: string;
  section: string;
  updateSectionFilter: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

export const Sections: React.FC<SectionProps> = (props) => {
  switch (props.company) {
    case "cnn":
      return (
        <select value={props.section} onChange={props.updateSectionFilter}>
          <option value="headlines">Headlines</option>
          <option value="world">World</option>
          <option value="us">US</option>
          <option value="sports">Sports</option>
          <option value="politics">Politics</option>
          <option value="business">Business</option>
          <option value="entertainment">Entertainment</option>
          <option value="opinions">Opinions</option>
        </select>
      );
    case "abc":
      return (
        <select value={props.section} onChange={props.updateSectionFilter}>
          <option value="headlines">Headlines</option>
          <option value="international">International</option>
          <option value="us">US</option>
          <option value="sports">Sports</option>
          <option value="politics">Politics</option>
          <option value="business">Business</option>
          <option value="entertainment">Entertainment</option>
          <option value="technology">Technology</option>
          <option value="health">Health</option>
        </select>
      );
  }
  return <div>Hello</div>;
};
