import './Dropdown.css'

function DropDownMenu(props) {

    const handleChange = (e) => {
        props.setValue(e.target.value);
    };

    const teams = [
        "Programming",
        "Front End",
        "Data Science",
        "Devops",
        "UX/UI",
        "Mobile",
        "Innovation Management"
    ];

    return (
        <div className="input-container" role="none">
            <label htmlFor="team" className="input-container__label">
                {props.title}
            </label>
            <select 
                value={props.value} 
                onChange={handleChange}
                name="team" 
                id="team" 
                className="dropdown"
            >
                <option value='' defaultValue='' hidden disabled >Select team</option>
                { teams.map((team, index) => 
                    <option value={team} key={index}> {team} </option>
                )};
            </select>
        </div>
    )
}

export default DropDownMenu;