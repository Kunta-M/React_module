export default function Header({genres}) {
  return (
    <header className={'main'}>
        <form>
            <select id={'genre-box'}>
                <option>ALL GENRES</option>
                {
                    genres.map(value =>
                        <option value={value.id} key={value.id}>{value.name}</option>)
                }
            </select>
        </form>

        <form id="form">
            <input type="text" id="search" placeholder="Search" className="search"/>
        </form>

        <button>Sign in</button>
    </header>
  );
}