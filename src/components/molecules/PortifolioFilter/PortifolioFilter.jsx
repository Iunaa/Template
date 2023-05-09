export default function PortifolioFilter() {
  return (
    <>
      <div>
        <select name="selecao" id="filter">
          <option value="showAll">Show All</option>
          <option value="design">Design</option>
          <option value="branding">Branding</option>
          <option value="illustration">Illustration</option>
          <option value="motion">Motion</option>
        </select>
      </div>
    </>
  );
}
