import './Dropdown.css'

function DropDownMenu(props) {

    const teams = [
        "Programming",
        "Front End",
        "Data Science",
        "Devops",
        "UX/UI",
        "Mobile",
        "Innovation Management"
    ];
// <option value={team}>{team}</option>
    return (
        <div className="input-container" role="none">
            <label htmlFor="team" className="input-container__label">{props.title}</label>
            <select name="team" id="team" className="dropdown">
                { teams.map( (team) => {
                    return (
                        <option value={team}>{team}</option>
                    );
                } ) }
            </select>
        </div>
    )
}

export default DropDownMenu;