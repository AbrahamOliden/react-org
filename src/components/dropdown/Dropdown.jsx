function DropDownMenu() {
    return (
        <div className="input-container" role="none">
            <select name="team" >
                <option value="">Programming</option>
                <option value="">Front End</option>
                <option value="">Data Science</option>
                <option value="">Devops</option>
                <option value="">UX/UI</option>
                <option value="">Mobile</option>
                <option value="">Innovation Management</option>
            </select>
        </div>
    )
}

export default DropDownMenu;