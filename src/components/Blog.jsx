import React, { Component } from 'react'
import BlogItem from './BlogItem'

export class Blog extends Component {
  render() {
    return (
      <div>
        This is my blog component.
        <BlogItem />
        <BlogItem />
        <BlogItem />
        <BlogItem />
        <BlogItem />
      </div>
    )
  }
}

export default Blog
