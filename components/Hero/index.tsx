import React from 'react';
import cn from 'classnames';

// ------------------------------------------------------------
interface IState {
  readonly init: boolean;
}

// ------------------------------------------------------------
export default class Hero extends React.Component<{}, IState> {
  state = {
    init: false,
  };

  onLoad = () => {
    // resets scale for background and initiate parallax
    setTimeout(() => this.setState({ init: true }), 120);
  };

  render() {
    const { init } = this.state;

    return (
      <div
        className="relative overflow-hidden flex items-center"
        style={{ height: '90vh', maxHeight: 1000 }}
      >
        <div className="absolute inset-0 pointer-events-none select-none">
          <picture>
            <source
              srcSet={`
              ${require('./images/ws320.jpg?webp')} 320w,
              ${require('./images/ws480.jpg?webp')} 480w,
              ${require('./images/ws768.jpg?webp')} 768w,
              ${require('./images/ws1024.jpg?webp')} 1024w,
              ${require('./images/ws1280.jpg?webp')} 1280w,
              ${require('./images/ws1366.jpg?webp')} 1366w,
              ${require('./images/ws1920.jpg?webp')} 1920w,
              ${require('./images/ws2600.jpg?webp')}
            `}
              type="image/webp"
            />
            <source
              srcSet={`
              ${require('./images/ws320.jpg')} 320w,
              ${require('./images/ws480.jpg')} 480w,
              ${require('./images/ws768.jpg')} 768w,
              ${require('./images/ws1024.jpg')} 1024w,
              ${require('./images/ws1280.jpg')} 1280w,
              ${require('./images/ws1366.jpg')} 1366w,
              ${require('./images/ws1920.jpg')} 1920w,
              ${require('./images/ws2600.jpg')}
            `}
              type="image/jpeg"
            />
            <img
              className="object-cover h-full w-full"
              src={require('./images/ws1366.jpg')}
              alt="Hero"
              loading="eager"
            />
          </picture>
        </div>

        <div
          className={cn(
            'container transition-all duration-1000 transform scale-50 text-center mx-auto',
            {
              ['scale-100']: init,
            }
          )}
          ref={this.onLoad}
        >
          <h1 className="text-3xl sm:text-5xl md:text-7xl font-medium">Filip Rafajec</h1>
          <div className="mx-auto my-3 border-white border-t w-4/5" />
          <h2 className="text-base sm:text-lg md:text-xl">
            <span>Engineering lead</span> - <span>Technical consultant</span>
          </h2>
        </div>
      </div>
    );
  }
}
