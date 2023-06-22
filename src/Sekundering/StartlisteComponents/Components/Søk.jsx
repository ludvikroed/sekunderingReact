const Søk = ({ searchQuery, setSearchQuery }) => {
  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
  };
  return (
    <>
      <h2>Søk på løpere</h2>
      <input type="text" value={searchQuery} onChange={handleSearch} />
    </>
  );
};

export default Søk;
