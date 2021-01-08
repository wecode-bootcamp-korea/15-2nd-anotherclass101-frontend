import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import theme, { Theme } from './../../styles/Theme';
import ClassCard from './Component/ClassCard';

const Main = () => {
  // 데이터 가져오기
  const [MainNavList, setTopNavList] = useState([]);
  const [MainCategories, setMainCategories] = useState([]);

  const [popularClass, setPopularClass] = useState([]);
  const [newClass, setNewClass] = useState([]);

  const [updateClass, setUpdateClass] = useState([]);

  const [topX, setTopX] = useState(0);
  const [newX, setNewX] = useState(0);

  const [menuX, setMenuX] = useState(0);

  //인기탑텐
  useEffect(() => {
    fetch('http://3.135.231.142:8000/product/orderbylike')
      .then(res => res.json())
      .then(res => {
        setPopularClass(res.results);
      });
  }, []);

  // 신규클래스;
  useEffect(() => {
    fetch('http://3.135.231.142:8000/product/status')
      .then(res => res.json())
      .then(res => {
        setNewClass(res.results);
      });
  }, []);

  // 라스트
  useEffect(() => {
    fetch('http://3.135.231.142:8000/product/category/1')
      .then(res => res.json())
      .then(res => {
        setUpdateClass(res.results);
      });
  }, []);

  useEffect(() => {
    fetch('http://localhost:3000/data/menuNavList.json')
      .then(res => res.json())
      .then(res => {
        setTopNavList(res.categories);
      });
  }, []);

  useEffect(() => {
    fetch('http://localhost:3000/data/mainCategories.json')
      .then(res => res.json())
      .then(res => {
        setMainCategories(res.classCategories);
      });
  }, []);

  // 카테고리 메뉴
  const btnpGoLeftt = () => {
    if (menuX === 0) {
      return;
    }
    setMenuX(menuX + 100);
  };

  const btnpGoRight = () => {
    if (menuX === -100 * (MainCategories.length - 6)) {
      return;
    }
    setMenuX(menuX - 100);
  };

  // 지금인기 top100
  const topGoLeftt = () => {
    if (topX === 0) {
      return;
    }
    setTopX(topX + 100);
  };

  const topGoRight = () => {
    if (topX === -100 * (popularClass.length - 4)) {
      return;
    }
    setTopX(topX - 100);
  };

  // 신규클래스
  const newGoLeft = () => {
    if (newX === 0) {
      return;
    }
    setNewX(newX + 100);
  };

  const newGoRight = () => {
    if (newX === -100 * (newClass.length - 4)) {
      return;
    }
    setNewX(newX - 100);
  };

  return (
    <div>
      <Menu>
        <Conbox>
          <MenuList>
            {MainNavList.map(menu => (
              <li>{menu}</li>
            ))}
          </MenuList>
        </Conbox>
      </Menu>

      <Section>
        <img
          className="bannerImg"
          src="images/mainbanner.png"
          alt="준비물까지 챙갸주는 온라인 클래스"
        />
        <ClassCategories>
          <Category>
            <LeftButton onClick={btnpGoLeftt}>
              <i className="fas fa-chevron-left" />
            </LeftButton>

            {MainCategories.map(categories => (
              <div style={{ transform: `translateX(${menuX}%)` }}>
                <li>{categories}</li>
              </div>
            ))}

            <RightButton onClick={btnpGoRight}>
              <i className="fas fa-chevron-right" />
            </RightButton>
          </Category>
        </ClassCategories>

        <TOP10>
          <Title>지금,인기 TOP10</Title>
          <ClassLeftButton onClick={topGoLeftt}>
            <i className="fas fa-chevron-left" />
          </ClassLeftButton>
          <Sessions>
            {popularClass.map(card => {
              return (
                <div style={{ transform: `translateX(${topX}%)` }}>
                  <ClassCard
                    key={card.id}
                    img={card.cover_image}
                    alt={card.alt}
                    brand={card.sub_category}
                    creator={card.creator}
                    title={card.name}
                    price={card.price}
                    heart={card.like}
                    thumbsup={'35'}
                  />
                </div>
              );
            })}
          </Sessions>
          <ClassRightButton onClick={topGoRight}>
            <i className="fas fa-chevron-right" />
          </ClassRightButton>
        </TOP10>

        <NewClass>
          <Title>
            신규 클래스
            <p>얼리버드 기간에만 받을 수 있는 최저가 할인 중</p>
          </Title>
          <ClassLeftButton onClick={newGoLeft}>
            <i class="fas fa-chevron-left" />
          </ClassLeftButton>
          <Sessions>
            {newClass.map(card => {
              return (
                <div style={{ transform: `translateX(${newX}%)` }}>
                  <ClassCard
                    key={card.id}
                    img={card.cover_image}
                    alt={card.alt}
                    brand={card.sub_category}
                    creator={card.creator}
                    title={card.name}
                    heart={card.like}
                    open={card.created_at}
                    coupon={'3만원'}
                    price={card.price}
                  />
                </div>
              );
            })}
          </Sessions>
          <ClassRightButton onClick={newGoRight}>
            <i className="fas fa-chevron-right" />
          </ClassRightButton>
        </NewClass>

        <Title>
          최근 업데이트 클래스
          <p>크리에이터가 최근 활동한 클래스예요.</p>
        </Title>
        <SessionsBox>
          {updateClass.map(card => {
            return (
              <ClassCard
                key={card.id}
                img={card.cover_image}
                alt={card.alt}
                brand={card.sub_category}
                creator={card.creator}
                title={card.name}
                heart={card.like}
                thumbsup={'35'}
              />
            );
          })}
        </SessionsBox>
      </Section>
    </div>
  );
};

export default Main;

const Menu = styled.div`
  padding: 14px 0;
  width: 100%;
  border-bottom: 1px solid ${theme.gray};
`;

const Conbox = styled.div`
  width: 1176px;
  margin: 0 auto;
`;

const MenuList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  background-color: ${theme.white};

  li {
    width: 100px;
    text-align: center;
  }

  li:first-child {
    text-align: left;
  }

  li:hover {
    font-weight: bold;
  }
`;

const Section = styled.section`
  margin: 0 auto;
  width: 1176px;

  .bannerImg {
    width: 100%;
  }
`;

const ClassCategories = styled.div`
  width: 100%;
  position: relative;
  div {
    display: inline-block;
    transition: 0.4s;
  }
`;

const Category = styled.ul`
  display: flex;
  width: 1176px;
  padding: 36px 0;
  overflow: hidden;

  li {
    display: inline-block;
    width: 166px;
    height: 48px;
    background-color: ${theme.gray};
    border-radius: 10px;
    text-align: center;
    line-height: 48px;
    font-size: 14px;
    margin-right: 24px;
  }
  li:hover {
    font-weight: bold;
  }
`;

const Button = styled.button`
  background: none;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  font-size: 20px;
  &:focus {
    outline: none;
  }
`;
const LeftButton = styled(Button)`
  left: -45px;
`;

const RightButton = styled(Button)`
  right: -45px;
`;

const Title = styled.p`
  font-size: 24px;
  font-weight: bold;
  color: rgb(27, 28, 29);
  line-height: 34px;

  p {
    font-size: 14px;
    font-weight: normal;
    color: rgb(133, 138, 141);
    line-height: 20px;
    letter-spacing: -0.15px;
    margin: 4px 0px 0px;
  }
`;

const Sessions = styled.ul`
  display: flex;
  position: relative;
  width: 1176px;
  margin: 16px 0 60px 0;
  overflow: hidden;

  div {
    transition: 0.4s;
  }
`;

const SessionsBox = styled(Sessions)`
  display: block;
  li {
    margin: 0 24px 32px 0;
  }

  li:nth-child(4n) {
    margin-right: 0;
  }
`;

const TOP10 = styled.div`
  position: relative;
`;

const NewClass = styled.div`
  position: relative;
`;

const ClassLeftButton = styled(Button)`
  top: 35%;
  left: -45px;
`;

const ClassRightButton = styled(Button)`
  top: 35%;
  right: -45px;
`;
