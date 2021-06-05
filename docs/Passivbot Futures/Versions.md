# Versioning

PassivBot Futures has begun versioning at commit #602. This page describes how versions work and which version you should use.

**Versioning Syntax**

PassivBot uses [Semantic Versioning 2.0.0](https://semver.org/spec/v2.0.0.html).

Versions have three ID numbers [MAJOR].[MINOR].[PATCH] that increment depending on the type of update:

1. MAJOR version when you make incompatible API changes,

2. MINOR version when you add functionality in a backwards compatible manner, and

3. PATCH version when you make backwards compatible bug fixes.

Additional labels for pre-release and build metadata are available as extensions to the MAJOR.MINOR.PATCH format.

**What Version Should I Use?**

The latest versions may have unknown bugs, however we still recommend updating to the latest major releases regularly. If you want to use an older configuration file, check the docs for your version for backwards compatibility. MAJOR versions do not support configurations from other MAJOR versions unless explicitly stated.

As the bot can change drastically between major updates, best form is to run new backtesting for every major version to prevent old configuration conflicts. While it may be possible to amputate old configuration data into a new version, it is not recommended.

**If I use an older version, will I be supported?**  

The community exists to help troubleshoot, share results, and develop. If you use an older major version, new configurations and features may not be released for your version specifically, although it may continue to be used within the community. After MAJOR updates, the previous version will not be explicitly supported, except for in special cases. In the future, PassivBot *may* include an option to update via command line, although at this time no such feature exists.
