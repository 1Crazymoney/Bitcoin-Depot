// @flow

import * as React from 'react'
import { Linking, Text } from 'react-native'
import { getBuildNumber, getVersion } from 'react-native-device-info'
import AntDesignIcon from 'react-native-vector-icons/AntDesign'
import { WebView } from 'react-native-webview'

import s from '../../locales/strings.js'
import { Airship } from '../services/AirshipInstance.js'
import { type AirshipBridge, AirshipModal, ContentArea, dayText, IconCircle, ModalCloseArrow, textSize, THEME } from './modalParts.js'

const buildNumber = getBuildNumber()
const versionNumber = getVersion()

export function showHelpModal(): Promise<mixed> {
  return Airship.show(bridge => <HelpModal bridge={bridge} />)
}

type Props = {
  bridge: AirshipBridge<mixed>
}

class HelpModal extends React.Component<Props> {
  webview: WebView | void

  render() {
    const { bridge } = this.props

    return (
      <AirshipModal bridge={bridge} onCancel={() => bridge.resolve()}>
        <IconCircle>
          <AntDesignIcon name="question" size={THEME.rem(2)} color={THEME.COLORS.SECONDARY} style={{ marginLeft: THEME.rem(0.1) }} />
        </IconCircle>

        <ContentArea grow>
          <Text style={dayText('title')}>{s.strings.help_modal_title}</Text>
          <Text style={[dayText('center'), { fontSize: 15, marginTop: 50 }]}>
            Maintained and Licenced by Lux Vending, Inc.,
            {'\n'}
            Atlanta, Georgia, USA
          </Text>
          <Text
            style={[dayText('center'), { fontSize: 15, color: '#0000FF', marginTop: 10, textDecorationLine: 'underline', fontStyle: 'italic' }]}
            onPress={() => Linking.openURL('http://www.bitcoindepot.com')}
          >
            www.bitcoindepot.com
          </Text>
          <Text style={[dayText('title'), { marginTop: 5, fontWeight: 'bold' }]}>Contact Support</Text>
          <Text style={[dayText('center'), { fontSize: 15 }]}>
            Email: support@bitcoindepot.com
            {'\n'}
            Tel.: +(678).435.9604
          </Text>
          <Text style={[dayText('center', 'small'), { lineHeight: textSize.large, marginTop: 50 }]}>
            <Text style={[dayText('center', 'small'), { lineHeight: textSize.large }]} onPress={() => Linking.openURL('https://www.bitcoindepot.com/terms/')}>
              Terms of Service
            </Text>
            {'\n'}
            <Text style={[dayText('center', 'small'), { lineHeight: textSize.large }]} onPress={() => Linking.openURL('https://www.bitcoindepot.com/privacy/')}>
              Privacy Policy
            </Text>
            {'\n'}
            {s.strings.help_version} {versionNumber}
            {'\n'}
            {s.strings.help_build} {buildNumber}
          </Text>
        </ContentArea>

        <ModalCloseArrow onPress={() => bridge.resolve()} />
      </AirshipModal>
    )
  }
}
