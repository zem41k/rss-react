import MyInput from '../../../UI/MyInput';
import React, { Component } from 'react';

interface ISearchInputState {
  searchValue: string;
}

interface ISearchInputProps {
  searchProducts: (value: string) => void;
}

export default class SearchInput extends Component<ISearchInputProps, ISearchInputState> {
  constructor(props: ISearchInputProps) {
    super(props);
    this.state = {
      searchValue: '',
    };
  }

  handelSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ searchValue: event.target.value }, () =>
      this.props.searchProducts(this.state.searchValue)
    );
  };

  componentWillUnmount() {
    localStorage.setItem('search', this.state.searchValue);
  }

  componentDidMount() {
    this.setState({ searchValue: localStorage.getItem('search') || '' });
  }

  render() {
    const { searchValue } = this.state;
    return (
      <>
        <MyInput
          placeholder="Search"
          className="products__search"
          value={searchValue}
          onChange={this.handelSearch}
        />
      </>
    );
  }
}
