const Søk = ({ searchQuery, setSearchQuery }) => {
  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
  };
  return (
    <div className="søk-løpere">
      <h2>Søk på løpere</h2>
      <input placeholder="Navn" type="text" value={searchQuery} onChange={handleSearch} />
    </div>
  );
};

export default Søk;
