import "./StationsFilter.css";
export default function StationsFilter() {
  const fuelTypes = ["E10", "E85", "Gazole", "GPLc", "SP95", "SP98"];

  return (
    <form className="search-form">
      <input type="text" placeholder="Postal Code" className="general-input" />
      <select value="SP98" className="general-input">
    <option value="E10">E10</option>
    <option value="E85">E85</option>
    <option value="Gazole">Gazole</option>
    <option value="GPLc">GPLc</option>
    <option value="SP95">SP95</option>
    <option value="SP98">SP98</option>
</select>
      <button className="send-request-button">Find Stations</button>
    </form>
  );
}