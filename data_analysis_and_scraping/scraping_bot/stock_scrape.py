import yfinance as yf



tickerData = yf.Ticker('QQQ')
todayData = tickerData.history(period='1d')
todayData['Close'][0]