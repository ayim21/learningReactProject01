import '../styles/Categories.css';

function Categories({setActiveCategory, categories, activeCategory}) {
    return (
        <div className='lmj-categories'>
            <select 
                value={activeCategory}
                onChange={(e) => setActiveCategory(e.target.value)}
                className="lmj-categories-select"
            >
                <option value=''>---</option>
                {categories.map((category) => (
                    <option key={category} value={category}>{category}</option>
                ))}
            </select>
            <button onClick={() => setActiveCategory('')}>Réinitialiser</button>
        </div>
    );
};

export default Categories;