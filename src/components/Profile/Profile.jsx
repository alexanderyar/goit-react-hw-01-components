import css from './Profile.module.css'
import PropTypes from 'prop-types'


export const Profile = ({ username, tag, location, avatar, followers, views, likes }) => {
    return (
      <div className={css.profile}>
  <div className={css.description}>
    <img
            src={avatar}
            alt="User avatar"
            className={css.avatar}
            width="100"
            height="100"
    />
    <p className={css.name}>{username}</p>
    <p className={css.tag}>@{tag}</p>
    <p className={css.location}>{location}</p>
  </div>

  <ul className={css.stats}>
    <li className={css.element}>
      <span className={css.label}>Followers <br></br> </span>
      <span className="quantity">{followers}</span>
    </li>
    <li className={css.element}>
      <span className={css.label}>Views <br></br> </span>
      <span className="quantity">{views}</span>
    </li>
    <li className={css.element}>
      <span className={css.label}>Likes <br></br> </span>
      <span className="quantity">{likes}</span>
    </li>
  </ul>
</div>
    )
}

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  followers: PropTypes.number.isRequired,
  views: PropTypes.number.isRequired,
  likes: PropTypes.number.isRequired
}