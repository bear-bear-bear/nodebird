import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Card, Avatar, Button } from 'antd';

import { logoutRequestAction } from '../../reducers/user';

const UserProfile = () => {
  const dispatch = useDispatch();
  const { me , isLoggingOut } = useSelector((state) => state.user);

  const onLogOut = useCallback(() => {
    dispatch(logoutRequestAction());
  }, []);

  return (
    <Card
      actions={[
        <div key="twit">
          트윗
          <br />@
        </div>,
        <div key="following">
          팔로잉
          <br />@
        </div>,
        <div key="follower">
          팔로워
          <br />@
        </div>,
      ]}
    >
      <Card.Meta 
        avatar={<Avatar>{me.nickname}</Avatar>}
        title={me.nickname}
      />
      <Button onClick={onLogOut} loading={isLoggingOut}>로그아웃</Button>
    </Card>
  );
};

export default UserProfile;
