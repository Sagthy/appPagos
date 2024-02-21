import Switch from 'react-switch';

export function SwitchElement({ checked, handleChange }) {
    return (
        <div className="switch-wrapper">
            <Switch onChange={handleChange} checked={checked} />
        </div>
    );
}