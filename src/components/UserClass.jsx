import React from 'react';

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {
        name: 'Loading...',
        location: 'Loading...',
        avatar_url: 'https://via.placeholder.com/150',
        bio: 'Loading...'
      }
    };
  }

  async componentDidMount() {
    try {
      const response = await fetch('https://api.github.com/users/HimanshuVerma5');
      const data = await response.json();
      this.setState({ userInfo: data });
    } catch (error) {
      console.error('Error fetching user data:', error);
    }
  }

  render() {
    const { name, location, avatar_url, bio } = this.state.userInfo;
    return (
      <div className='flex items-center space-x-4'>
        <img src={avatar_url} alt={name} className='w-24 h-24 object-cover rounded-full shadow-lg' />
        <div>
          <h2 className='text-xl font-bold text-gray-900'>{name}</h2>
          <p className='text-gray-700'>{location}</p>
          <p className='text-gray-600 mt-1'>{bio}</p>
        </div>
      </div>
    );
  }
}

export default UserClass;
