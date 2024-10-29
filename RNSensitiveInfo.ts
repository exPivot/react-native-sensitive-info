import { NativeModules } from 'react-native';

const { RNSensitiveInfo } = NativeModules;

RNSensitiveInfo.setInvalidatedByBiometricEnrollment = (
  invalidatedByBiometricEnrollment?: boolean,
) => {
  if (RNSensitiveInfo.setInvalidatedByBiometricEnrollment == null) {
    return undefined;
  }

  return RNSensitiveInfo.setInvalidatedByBiometricEnrollment(
    invalidatedByBiometricEnrollment,
  );
};

RNSensitiveInfo.cancelFingerprintAuth = () => {
  if (RNSensitiveInfo.cancelFingerprintAuth == null) {
    return undefined;
  }

  return RNSensitiveInfo.cancelFingerprintAuth();
};

export default RNSensitiveInfo;
