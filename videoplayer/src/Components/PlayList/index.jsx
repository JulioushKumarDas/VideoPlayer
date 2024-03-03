import React from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

const Playlist = ({ playlist, selectedVideoIndex, onVideoClick, onDragEnd }) => {
  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable droppableId="playlist">
        {(provided) => (
          <div {...provided.droppableProps} ref={provided.innerRef}>
            {playlist.map((video, index) => (
              <Draggable key={video.id} draggableId={video.id.toString()} index={index}>
                {(provided) => (
                  <div
                    onClick={() => onVideoClick(index)}
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                  >
                    {selectedVideoIndex === index ? '> ' : ''}
                    {video.title}
                  </div>
                )}
              </Draggable>
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
};

export default Playlist;