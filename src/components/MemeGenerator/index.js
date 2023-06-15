import {Component} from 'react'

import {
  MainContainer,
  Heading,
  Label,
  TextInput,
  Select,
  CustomButton,
  MemeContainer,
  TextContent,
} from './styledComponents'

const fontSizesOptionsList = [
  {
    optionId: '8',
    displayText: '8',
  },
  {
    optionId: '12',
    displayText: '12',
  },
  {
    optionId: '16',
    displayText: '16',
  },
  {
    optionId: '20',
    displayText: '20',
  },
  {
    optionId: '24',
    displayText: '24',
  },
  {
    optionId: '28',
    displayText: '28',
  },
  {
    optionId: '32',
    displayText: '32',
  },
]

class MemeGenerator extends Component {
  state = {
    imageUrl: '',
    topText: '',
    bottomText: '',
    fontSize: fontSizesOptionsList[0].optionId,
    memeDetails: {
      memeImgUrl: '',
      memeTopText: '',
      memeBottomText: '',
      memeFontSize: '',
    },
  }

  onChangeImageUrl = event => {
    this.setState({imageUrl: event.target.value})
  }

  onChangeTopText = event => {
    this.setState({topText: event.target.value})
  }

  onChangeBottomText = event => {
    this.setState({bottomText: event.target.value})
  }

  onChangeFontSize = event => {
    this.setState({fontSize: event.target.value})
  }

  onCLickGenerate = event => {
    event.preventDefault()

    const {imageUrl, fontSize, topText, bottomText} = this.state

    this.setState({
      memeDetails: {
        memeImgUrl: imageUrl,
        memeTopText: topText,
        memeBottomText: bottomText,
        memeFontSize: fontSize,
      },
    })
  }

  render() {
    const {imageUrl, fontSize, topText, bottomText, memeDetails} = this.state

    const {memeBottomText, memeFontSize, memeImgUrl, memeTopText} = memeDetails

    return (
      <MainContainer>
        <form onSubmit={this.onCLickGenerate}>
          <Heading>Meme Generator</Heading>
          <Label htmlFor="imageUrl">Image Url</Label>
          <TextInput
            type="text"
            placeholder="Enter the Image URL"
            id="imageUrl"
            onChange={this.onChangeImageUrl}
            value={imageUrl}
          />

          <Label htmlFor="topText">Top Text</Label>
          <TextInput
            type="text"
            placeholder="Enter the Top Text"
            id="topText"
            onChange={this.onChangeTopText}
            value={topText}
          />

          <Label htmlFor="bottomText">Bottom Text</Label>
          <TextInput
            type="text"
            placeholder="Enter the Bottom Text"
            id="bottomText"
            onChange={this.onChangeBottomText}
            value={bottomText}
          />

          <Label htmlFor="fontSize">Font Size</Label>
          <Select
            id="fontSize"
            value={fontSize}
            onChange={this.onChangeFontSize}
          >
            {fontSizesOptionsList.map(eachOption => (
              <option key={eachOption.optionId} value={eachOption.optionId}>
                {eachOption.displayText}
              </option>
            ))}
          </Select>

          <CustomButton type="submit">Generate</CustomButton>
        </form>

        <MemeContainer data-testid="meme" imageUrl={memeImgUrl}>
          <TextContent fontSize={memeFontSize}>{memeTopText}</TextContent>
          <TextContent fontSize={memeFontSize}>{memeBottomText}</TextContent>
        </MemeContainer>
      </MainContainer>
    )
  }
}

export default MemeGenerator
