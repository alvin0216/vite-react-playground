import { DndContext, PointerSensor, closestCenter, useSensor, useSensors } from '@dnd-kit/core';
import type { DragEndEvent } from '@dnd-kit/core/dist/types/index';
import { SortableContext, arrayMove, horizontalListSortingStrategy, useSortable } from '@dnd-kit/sortable';
import type { FC } from 'react';
import React, { useState } from 'react';
import contryCodeList from '../utils/contry-code.json';
import { AutoComplete, Button, Space, Tag, Tooltip } from 'antd';
import { DragOutlined, SortAscendingOutlined, RedoOutlined } from '@ant-design/icons';
import TranslateIcon from './Icons/TranslateIcon';
import { useSetState } from 'ahooks';
const { CheckableTag } = Tag;

type DraggableTagProps = {
  tag: CountryItem;
  checked: boolean;
  onChange?(checked: boolean): void;
};

const DraggableTag: FC<DraggableTagProps> = (props) => {
  const { tag, checked, onChange } = props;
  const { listeners, setNodeRef, transform, transition, isDragging } = useSortable({ id: tag.id });

  const commonStyle = { cursor: 'move', transition: 'unset' };

  const style = transform
    ? {
        ...commonStyle,
        transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
        transition: isDragging ? 'unset' : transition, // Improve performance/visual effect when dragging
      }
    : commonStyle;

  return (
    <CheckableTag
      checked={checked}
      onChange={onChange}
      style={style}
      ref={setNodeRef}
      {...listeners}
      onClick={() => {
        console.log(333);
      }}>
      {tag.cn}
    </CheckableTag>
  );
};

const DraggableTags: React.FC = () => {
  const [sortable, setSortable] = useState(false);
  const [countryId, setCountryId] = useState('+244');
  const [items, setItems] = useState<CountryItem[]>(contryCodeList);

  const sensors = useSensors(useSensor(PointerSensor));

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;
    if (!over) return;

    if (active.id !== over.id) {
      setItems((data) => {
        const oldIndex = data.findIndex((item) => item.id === active.id);
        const newIndex = data.findIndex((item) => item.id === over.id);

        return arrayMove(data, oldIndex, newIndex);
      });
    }
  };

  return (
    <>
      <div className='mb-4'>
        <Space>
          <Tooltip title='Free sorting by drag'>
            <Button
              icon={<DragOutlined />}
              type={sortable ? 'primary' : 'dashed'}
              onClick={() => setSortable((prev) => !prev)}
            />
          </Tooltip>
          <Tooltip title='按字母排序'>
            <Button icon={<SortAscendingOutlined />} />
          </Tooltip>
          <Tooltip title='切换中文显示'>
            <Button icon={<TranslateIcon />} />
          </Tooltip>

          <Tooltip title='Refresh your computer info'>
            <Button icon={<RedoOutlined />} />
          </Tooltip>

          <AutoComplete allowClear placeholder='Enter country name or abbreviation to filter' className='w-200' />
        </Space>
      </div>

      {sortable ? (
        <DndContext sensors={sensors} onDragEnd={handleDragEnd} collisionDetection={closestCenter}>
          <SortableContext items={items} strategy={horizontalListSortingStrategy}>
            {items.map((item) => (
              <DraggableTag
                tag={item}
                key={item.id}
                checked={countryId === item.id}
                onChange={(checked) => {
                  if (!checked) {
                    setCountryId(item.id);
                  }
                }}
              />
            ))}
          </SortableContext>
        </DndContext>
      ) : (
        <>
          {items.map((item) => (
            <CheckableTag
              key={item.id}
              checked={countryId === item.id}
              onChange={(checked) => {
                if (checked) {
                  setCountryId(item.id);
                }
              }}>
              {item.cn}
            </CheckableTag>
          ))}
        </>
      )}
    </>
  );
};

export default DraggableTags;
