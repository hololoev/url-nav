'use strict'

const urlCalc = require('../index.js')

describe('Index', function() {
  
  it('Absolute paths', function(done) {
    if( 
      ( urlCalc('http://example.com/folder1/sub_folder/', '/folder2/sub_folder/') == 'http://example.com/folder2/sub_folder/' )
      &&
      ( urlCalc('http://example.com/folder1/sub_folder/', '/folder2/sub_folder') == 'http://example.com/folder2/sub_folder' )
      &&
      ( urlCalc('http://example.com/folder1/sub_folder', '/folder2/sub_folder/') == 'http://example.com/folder2/sub_folder/' )
    )
      done()
  })
  
  it('Relative paths', function(done) {
    if( 
      ( urlCalc('http://example.com/folder1/sub_folder/', '../sub_folder2') == 'http://example.com/folder1/sub_folder2' )
      &&
      ( urlCalc('http://example.com/folder1/sub_folder/', '../../folder3') == 'http://example.com/folder3' )
      &&
      ( urlCalc('http://example.com/folder1/sub_folder/', '../../folder3/') == 'http://example.com/folder3/' )
      &&
      ( urlCalc('http://example.com/folder1/sub_folder/file.html', '../../folder3') == 'http://example.com/folder3' )
      &&
      ( urlCalc('http://example.com/folder1/sub_folder/', 'sub_sub_folder/') == 'http://example.com/folder1/sub_folder/sub_sub_folder/' )
      &&
      ( urlCalc('http://example.com/folder1/sub_folder/', 'sub_sub_folder') == 'http://example.com/folder1/sub_folder/sub_sub_folder' )
    )
      done()
  })
  
  
})
