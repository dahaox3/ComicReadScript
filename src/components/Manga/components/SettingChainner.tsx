import MdDeleteSweep from '@material-design-icons/svg/round/delete_sweep.svg';
import MdLink from '@material-design-icons/svg/round/link.svg';
import MdRefresh from '@material-design-icons/svg/round/refresh.svg';
import { t } from 'helper';

import {
  chainnerConnection,
  clearChainnerCache,
  retryChainner,
  testChainner,
} from '../actions/chainner';
import { setOption } from '../actions/helper';
import { store } from '../store';
import { SettingsItem } from './SettingsItem';
import { SettingsItemButton } from './SettingsItemButton';
import { SettingsItemNumber } from './SettingsItemNumber';

export const SettingChainner = () => (
  <>
    <SettingsItem name={t('chainner.server_url')} style={{ display: 'block' }}>
      <input
        type="url"
        aria-label={t('chainner.server_url')}
        value={store.option.chainner.serverUrl}
        on:change={(event) =>
          setOption('chainner', 'serverUrl', event.currentTarget.value.trim())
        }
      />
    </SettingsItem>
    <SettingsItem name={t('chainner.token')} style={{ display: 'block' }}>
      <input
        type="password"
        autocomplete="off"
        aria-label={t('chainner.token')}
        value={store.option.chainner.token}
        on:change={(event) =>
          setOption('chainner', 'token', event.currentTarget.value.trim())
        }
      />
    </SettingsItem>
    <SettingsItemNumber
      name={t('chainner.preload')}
      step={1}
      maxLength={1}
      value={store.option.chainner.preload}
      onChange={(value) => {
        if (Number.isFinite(value))
          setOption(
            'chainner',
            'preload',
            Math.max(0, Math.min(8, Math.round(value))),
          );
      }}
    />
    <SettingsItemButton
      name={t('chainner.test')}
      onClick={() => void testChainner()}
    >
      <MdLink />
    </SettingsItemButton>
    <SettingsItemButton name={t('chainner.retry')} onClick={retryChainner}>
      <MdRefresh />
    </SettingsItemButton>
    <SettingsItemButton
      name={t('chainner.clear_cache')}
      onClick={() => void clearChainnerCache()}
    >
      <MdDeleteSweep />
    </SettingsItemButton>
    <SettingsItem name={chainnerConnection() || t('chainner.help')} />
    <SettingsItem name={t('chainner.progress_legend')} />
  </>
);
