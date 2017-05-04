import React from 'react'

import App from './App'

class FizzbuzzApp extends React.Component {
  state = {
    startingNumber: 1,
    endingNumber: 15,
    divisibleNumber1: 3,
    divisibleWord1: 'Fizz',
    divisibleNumber2: 5,
    divisibleWord2: 'Buzz',
    result: [],
  }

  hitme() {
    const { startingNumber, endingNumber, divisibleNumber1, divisibleWord1,
      divisibleNumber2, divisibleWord2 } = this.state
    const result = []
    for (let i = startingNumber; i <= endingNumber; i += 1) {
      if (i % divisibleNumber1 === 0 && i % divisibleNumber2 === 0) {
        result.push(divisibleWord1 + divisibleWord2)
      } else if (i % divisibleNumber1 === 0) {
        result.push(divisibleWord1)
      } else if (i % divisibleNumber2 === 0) {
        result.push(divisibleWord2)
      } else {
        result.push(i)
      }
    }
    this.setState({ result })
  }

  reset() {
    this.setState({ result: [] })
  }

  renderOutput() {
    // eslint-disable-next-line react/no-array-index-key
    return this.state.result.map((item, idx) => <div key={idx}>{item}</div>)
  }
  render() {
    const { startingNumber, endingNumber, divisibleNumber1, divisibleWord1,
      divisibleNumber2, divisibleWord2 } = this.state
    return (
      <App
        title="Fizz Buzz (Reusable)"
        controls={
          <div>
            <div className="row">
              <div className="col-md-6">
                <div className="form-group">
                  <label htmlFor="starting-number">Starting Number</label>
                  <input
                    id="starting-number"
                    className="form-control"
                    type="number"
                    onChange={evt => this.setState({ startingNumber: Number(evt.target.value) })}
                    placeholder="starting number"
                    value={startingNumber}
                    max={10}
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group">
                  <label htmlFor="ending-number">Ending Number</label>
                  <input
                    id="ending-number"
                    className="form-control"
                    type="number"
                    placeholder="ending number"
                    onChange={evt => this.setState({ endingNumber: Number(evt.target.value) })}
                    value={endingNumber}
                    max={50}
                  />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <div className="form-group">
                  <label htmlFor="divisible-number-1">Divisible Number #1</label>
                  <input
                    id="divisible-number-1"
                    className="form-control"
                    type="number"
                    placeholder="divisible number #1"
                    onChange={evt => this.setState({ divisibleNumber1: Number(evt.target.value) })}
                    value={divisibleNumber1}
                    max={10}
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group">
                  <label htmlFor="divisible-word-1">Divisible Word #1</label>
                  <input
                    id="divisible-word-1"
                    className="form-control"
                    placeholder="divisible word #1"
                    onChange={evt => this.setState({ divisibleWord1: evt.target.value })}
                    value={divisibleWord1}
                  />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <div className="form-group">
                  <label htmlFor="divisible-number-2">Divisible Number #2</label>
                  <input
                    id="divisible-number-2"
                    className="form-control"
                    type="number"
                    placeholder="divisible number #2"
                    onChange={evt => this.setState({ divisibleNumber2: Number(evt.target.value) })}
                    value={divisibleNumber2}
                    max={20}
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group">
                  <label htmlFor="divisible-word-2">Divisible Word #2</label>
                  <input
                    id="divisible-word-2"
                    className="form-control"
                    placeholder="divisible word #2"
                    onChange={evt => this.setState({ divisibleWord2: evt.target.value })}
                    value={divisibleWord2}
                  />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <button className="btn btn-primary btn-block" onClick={() => this.hitme()}>Hit me!</button>
              </div>
              <div className="col-md-6">
                <button className="btn btn-default btn-block" onClick={() => this.reset()}>Reset</button>
              </div>
            </div>
          </div>
        }
        output={this.renderOutput()}
      />
    )
  }
}

export default FizzbuzzApp
