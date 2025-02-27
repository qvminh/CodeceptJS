const { expect } = require('expect')
const exec = require('child_process').exec
const { codecept_dir, codecept_run } = require('./consts')
const figures = require('figures')
const debug_this_test = false

const config_run_config = (config, grep, verbose = false) => `${codecept_run} ${verbose || debug_this_test ? '--verbose' : ''} --config ${codecept_dir}/configs/step_timeout/${config} ${grep ? `--grep "${grep}"` : ''}`

describe('CodeceptJS Steps', function () {
  this.timeout(5000)

  it('should stop test, when step timeout exceeded', done => {
    exec(config_run_config('codecept-1000.conf.js', 'Default command timeout'), (err, stdout) => {
      expect(stdout).toContain('Action exceededByTimeout: 1500 was interrupted on timeout 1000ms')
      expect(stdout).toContain('0 passed, 1 failed')
      expect(stdout).toContain(figures.cross + ' I.exceededByTimeout(1500)')
      expect(err).toBeTruthy()
      done()
    })
  })

  it('should respect custom timeout with regex', done => {
    exec(config_run_config('codecept-1000.conf.js', 'Wait with longer timeout', debug_this_test), (err, stdout) => {
      expect(stdout).not.toContain('was interrupted on timeout')
      expect(stdout).toContain('1 passed')
      expect(err).toBeFalsy()
      done()
    })
  })

  it('should respect custom timeout with full step name', done => {
    exec(config_run_config('codecept-1000.conf.js', 'Wait with shorter timeout', debug_this_test), (err, stdout) => {
      expect(stdout).toContain('Action waitTadShorter: 750 was interrupted on timeout 500ms')
      expect(stdout).toContain('0 passed, 1 failed')
      expect(err).toBeTruthy()
      done()
    })
  })

  it('should not stop test, when step not exceeded', done => {
    exec(config_run_config('codecept-2000.conf.js', 'Default command timeout'), (err, stdout) => {
      expect(stdout).not.toContain('was interrupted on timeout')
      expect(stdout).toContain('1 passed')
      expect(err).toBeFalsy()
      done()
    })
  })

  it('should ignore timeout for steps with `wait*` prefix', done => {
    exec(config_run_config('codecept-1000.conf.js', 'Wait command timeout'), (err, stdout) => {
      expect(stdout).not.toContain('was interrupted on timeout')
      expect(stdout).toContain('1 passed')
      expect(err).toBeFalsy()
      done()
    })
  })

  it('step timeout should work nicely with step retries', done => {
    exec(config_run_config('codecept-1000.conf.js', 'Rerun sleep'), (err, stdout) => {
      expect(stdout).not.toContain('was interrupted on timeout')
      expect(stdout).toContain('1 passed')
      expect(err).toBeFalsy()
      done()
    })
  })
})
