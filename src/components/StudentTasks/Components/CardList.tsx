import { memo, useEffect, useState } from 'react';

import range from 'lodash/range';
import size from 'lodash/size';

import ArrowDownIcon from '@mui/icons-material/KeyboardArrowDownRounded';
import ArrowUpIcon from '@mui/icons-material/KeyboardArrowUpRounded';

import Box from '@components/Box';
import Collapse from '@components/Collapse';
import Skeleton from '@components/Skeleton';
import Typography from '@components/Typography';

import { useGlobalContext } from '../GlobalContext';
import { GroupDataProps } from '../props';
import { CollapseSubHeader, Container, DropdownButton, FlexBox, HeaderCollapse } from '../styles';

import CardInfo from './CardInfo';
import EmptyPage from './EmptyPage';

interface ICardList {
  data?: GroupDataProps[];
}

export default memo(({ data = [] }: ICardList) => {
  const { maxHeight, loading } = useGlobalContext();
  const [collapse, setCollapse] = useState<Record<string, boolean>>({});

  const isEmptyData = !data.reduce((prev, { data: _data }) => prev + size(_data), 0);

  useEffect(() => {
    const defaultCollapse = range(1, size(data) + 1).reduce(
      (prev, idx) => ({
        ...prev,
        [`collapse-${idx}`]: true,
      }),
      {}
    );

    setCollapse(defaultCollapse);
  }, [data]);

  const handleCollapse = (key: string, collapsed: boolean) => {
    setCollapse((prev: Record<string, boolean>) => ({
      ...prev,
      [key]: collapsed,
    }));
  };

  if (loading)
    return (
      <>
        <Skeleton />
        <Skeleton height={50} />
      </>
    );

  if (isEmptyData) return <EmptyPage />;

  return (
    <Container maxHeight={maxHeight}>
      {data?.map(({ title, subTitle, disabledCollapse, data: cards }, idx) => {
        const key = `collapse-${idx + 1}`;
        const isIn = collapse?.[key] ?? false;
        const sizeCards = size(cards);

        if (!sizeCards) return null;

        const _cards = cards?.sort((a, b) => a?.dueTime?.localeCompare(b?.dueTime));

        return (
          <Box key={key}>
            <HeaderCollapse>
              <Box>
                <Typography component='div' variant='titleMedium'>
                  {title}
                </Typography>
                {!!subTitle && <CollapseSubHeader>{subTitle}</CollapseSubHeader>}
              </Box>
              {!disabledCollapse && (
                <FlexBox>
                  <Typography variant='bodyLarge'>{sizeCards}</Typography>
                  <DropdownButton onClick={() => handleCollapse(key, !isIn)}>
                    {isIn ? <ArrowUpIcon /> : <ArrowDownIcon />}
                  </DropdownButton>
                </FlexBox>
              )}
            </HeaderCollapse>
            <Collapse in={disabledCollapse || isIn}>
              {_cards?.map((row, rowIdx) => (
                <CardInfo key={`card-${idx}-${rowIdx}`} {...row} />
              ))}
            </Collapse>
          </Box>
        );
      })}
    </Container>
  );
});
