import Switch from 'react-switch';

export function SwitchElement({ checked, handleChange }) {
    return (
        <div className="switch-wrapper">
            <label htmlFor="switchElement" className="visually-hidden">Switch:</label>
            <Switch id="switchElement" onChange={handleChange} checked={checked} />
        </div>
    );
}