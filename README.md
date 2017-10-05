# react-togglr

React library for building declarative toggle components

## Example

```
const UserProfileDropdown = ({ avatarUrl, name }) => (
  <Toggle
    render={({ on, toggle }) => (
      <div className="UserProfileDropdown">
        <img className="UserProfileDropdown-avatar" src={avatarUrl} />
        <span className="UserProfileDropdown-name" onClick={toggle}>
          {name}{' '}
          <img
            src={arrow}
            className={`UserProfileDropdown-arrow ${on
              ? 'UserProfileDropdown-arrow--on'
              : ''} `}
          />
        </span>
        {on ? <Menu /> : null}
      </div>
    )}
    onToggle={({ on }) => console.log(`${on ? 'ON' : 'OFF'}`)}
  />
);

```

## Built With

* [React](https://reactjs.org)
* [ReactDOM](https://reactjs.org/docs/react-dom.html)

## Authors

* **Vicent Gozalbes** - *Initial work* - [vigosan](https://github.com/vigosan)

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
