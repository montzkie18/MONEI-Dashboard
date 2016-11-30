import React, {PropTypes} from 'react';
import cx from 'classnames';
import classNames from './UserRow.scss';
import humanize from 'humanize-string';
import userPic from 'static/user.png';

export const NUM_COLUMNS = 6;

const UserRow = ({
  user,
  userMetadata,
  appMetadata,
  viewUser,
  isHeader,
}) => {
  if (isHeader) {
    return (
      <tr>
        <th className="one wide" />
        <th>Name</th>
        <th>Store URL</th>
        <th>Country</th>
        <th>Status</th>
        <th className="right aligned">Verified</th>
      </tr>
    );
  } else {
    return (
      <tr className={classNames.row} onClick={() => viewUser(user.user_id)}>
        <td>
          <img className="ui avatar image" src={user.picture} onError={e => e.target.src = userPic} />
        </td>
        <td className="text overflow">{userMetadata.name || user.email}</td>
        <td className="text overflow">
          {userMetadata.store_url
            ? <a href={userMetadata.store_url} target="_blank" onClick={e => e.stopPropagation()}>
              {userMetadata.store_url}
            </a>
            : <p>{userMetadata.store_url}</p>
          }
        </td>
        <td>{userMetadata.country}</td>
        <td>{humanize(appMetadata.status || '')}</td>
        <td className="right aligned">
          {appMetadata.verified
            ? <i className={cx('big check circle icon', classNames.success)} />
            : userMetadata.verification_requested
            ? <i className={cx('big warning circle icon', classNames.warning)} /> : ''}
        </td>
      </tr>
    );
  }
};

UserRow.propTypes = {
  user: PropTypes.object,
  userMetadata: PropTypes.object,
  appMetadata: PropTypes.object,
  viewUser: PropTypes.func,
  isHeader: PropTypes.bool
};
export default UserRow;
