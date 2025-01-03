**[INSTALL LATEST VERSION](https://cdn.jsdelivr.net/gh/vcalv/underdrive@master/web-ext-artifacts/559d8e3e0e284bddbbfa-1.3.xpi)**

# Description

Firefox extension for Overdrive.

**Only Firefox supported as a single click install with auto update**

It should work in every browser that supports `Manifest v3`, but will require manual instalation with all the associated problems.

For info on how you might be able to install it in other browsers [this](https://www.youtube.com/watch?v=yNFwFQrc27Q) is a good video introduction.

I've now tested it with chromium and it works (v1.3).

My suggestion is, for now just do all your Overdrive business in Firefox and install it from the link at the top of this README.

# Usage

Allows you to use [Overdrive](https://overdrive.com) as if mp3/odm download was still available.

Just go to https://yourlibraryid.overdrive.com/account/loans and next to each audiobook you'll find a button that allows you to download the `.odm` file.

Use whatever tool you used to use to download the `mp3` file from the odm.

I use my fork of [overdrive.sh](https://github.com/vcalv/overdrive.sh).

# Credits

Shamelessly adapted from https://gist.github.com/ping/b58ae66359691db1d08f929a9e57a03d to use pure DOM functions.

Also removes some stupid libby elements.
