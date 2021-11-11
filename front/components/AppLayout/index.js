import React, { useCallback } from 'react';
import { useSelector } from 'react-redux';
import Head from 'next/head';
import Router from 'next/router';
import PropTypes from 'prop-types';
import Link from 'next/link';
import { Menu, Row, Col } from 'antd';
import { GithubOutlined } from '@ant-design/icons';

import UserProfile from '../UserProfile';
import LoginForm from '../LoginForm';
import useInput from '../../hooks/useInput';

import * as S from './styles';

const AppLayout = ({ children }) => {
  const { me } = useSelector((state) => state.user);
  const [searchInput, onChangeSearchInput] = useInput('');

  const onSearch = useCallback(() => {
    Router.push(`/hashtag/${searchInput}`);
  }, [searchInput]);

  return (
    <>
      <Head>
        <meta property="og:image" content="https://bearsns.com/favicon.ico" />
      </Head>
      <div>
        <S.Global />
        <Menu mode="horizontal">
          <Menu.Item>
            <Link href="/">
              <a><img src="/logo.jpg" alt="로고" width={48} height={48} /></a>
            </Link>
          </Menu.Item>
          <Menu.Item>
            <S.SearchInput
              size="large"
              enterButton
              value={searchInput}
              onChange={onChangeSearchInput}
              onSearch={onSearch}
            />
          </Menu.Item>
          { me ? (
            <Menu.Item>
              <Link href="/profile">
                <S.Anchor>프로필</S.Anchor>
              </Link>
            </Menu.Item>
          ) : (
            <Menu.Item>
              <Link href="/signup">
                <S.Anchor>회원가입</S.Anchor>
              </Link>
            </Menu.Item>
          )}
        </Menu>
        <Row gutter={8}>
          <Col xs={24} md={6}>
            {me ? <UserProfile /> : <LoginForm />}
          </Col>
          <Col xs={24} md={12}>
            {children}
          </Col>
          <Col xs={24} md={6}>
            <S.Anchor
              href="https://github.com/bear-bear-bear"
              target="_blank"
              rel="noopener noreferrer"
            >
              Made by
              <S.IconWrapper>
                <GithubOutlined />
              </S.IconWrapper>
              bear-bear-bear
            </S.Anchor>
          </Col>
        </Row>
      </div>
    </>
  );
};

AppLayout.prototype = {
  children: PropTypes.node.isRequired,
};

export default AppLayout;
