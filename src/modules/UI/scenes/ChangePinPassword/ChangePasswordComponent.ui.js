// @flow

import { ChangePasswordScreen } from 'edge-login-ui-rn'
import type { EdgeAccount, EdgeContext } from 'edge-core-js'
import React, { Component } from 'react'
import { View } from 'react-native'

import Gradient from '../../components/Gradient/Gradient.ui'
import SafeAreaView from '../../components/SafeAreaView'
import styles from '../Settings/style.js'

export type ChangePasswordOwnProps = {
  account: EdgeAccount,
  context: EdgeContext,
  showHeader: boolean
}

export type ChangePasswordDispatchProps = {
  onComplete: () => void
}

export type ChangePasswordStateProps = {
  context: EdgeContext,
  account: EdgeAccount,
  showHeader: boolean
}

type ChangePasswordComponent = ChangePasswordOwnProps & ChangePasswordDispatchProps & ChangePasswordStateProps

export default class ChangePassword extends Component<ChangePasswordComponent> {
  onComplete = () => {
    this.props.onComplete()
  }

  render () {
    return (
      <SafeAreaView>
        <Gradient style={styles.gradient} />
        <View style={styles.container}>
          <ChangePasswordScreen
            account={this.props.account}
            context={this.props.context}
            onComplete={this.onComplete}
            onCancel={this.onComplete}
            showHeader={this.props.showHeader}
          />
        </View>
      </SafeAreaView>
    )
  }
}
