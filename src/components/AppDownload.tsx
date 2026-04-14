const AppDownload = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black flex items-center justify-center p-6 font-sans">
      <div className="max-w-5xl w-full mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left side - App Preview */}
          <div className="relative flex justify-center">
            <div className="relative w-[280px] md:w-[320px]">
              {/* Phone Mockup */}
              <div className="relative bg-gray-800 rounded-[3rem] p-4 shadow-2xl border-[12px] border-gray-900">
                {/* Phone Notch */}
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-6 bg-gray-900 rounded-b-2xl z-10"></div>

                {/* Screen Content */}
                <div className="h-[520px] md:h-[580px] bg-gradient-to-br from-pink-900 via-gray-900 to-black rounded-3xl overflow-hidden relative">
                  {/* App Header */}
                  <div className="pt-10 px-6">
                    <div className="flex items-center justify-between">
                      <div className="text-white">
                        <div className="text-xs opacity-70">9:41</div>
                      </div>
                      <div className="flex space-x-1">
                        <div className="w-4 h-4 bg-white rounded-full opacity-20"></div>
                        <div className="w-4 h-4 bg-white rounded-full opacity-20"></div>
                        <div className="w-4 h-4 bg-white rounded-full opacity-20"></div>
                      </div>
                    </div>
                  </div>

                  {/* App Content */}
                  <div className="px-8 pt-10">
                    <div className="mb-6">
                      <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-rose-500 rounded-2xl mb-4 flex items-center justify-center">
                        <span className="text-white text-xl font-bold">
                          Dil
                        </span>
                      </div>
                      <h3 className="text-white text-xl font-bold mb-2">
                        Dill keh rishta
                      </h3>
                      <p className="text-gray-400 text-sm">
                        Dill keh rishta App
                      </p>
                    </div>

                    {/* Stats */}
                    <div className="grid grid-cols-3 gap-4 mb-8">
                      <div className="text-center">
                        <div className="text-white text-2xl font-bold">
                          50K+
                        </div>
                        <div className="text-gray-400 text-xs">Users</div>
                      </div>
                      <div className="text-center">
                        <div className="text-white text-2xl font-bold">4.9</div>
                        <div className="text-gray-400 text-xs">Rating</div>
                      </div>
                      <div className="text-center">
                        <div className="text-white text-2xl font-bold">
                          10K+
                        </div>
                        <div className="text-gray-400 text-xs">Matches</div>
                      </div>
                    </div>

                    {/* Current Project */}
                    <div className="bg-gray-800/50 rounded-2xl p-4 mb-4">
                      <div className="flex items-center justify-between mb-3">
                        <div>
                          <div className="text-white font-medium">
                            Dill keh rishta
                          </div>
                          <div className="text-gray-400 text-sm">
                            Profile • 85% Complete
                          </div>
                        </div>
                      </div>
                      <div className="h-1 bg-gray-700 rounded-full overflow-hidden">
                        <div className="h-full w-4/5 bg-gradient-to-r from-pink-500 to-rose-500"></div>
                      </div>
                    </div>

                    {/* Quick Actions */}
                    <div className="grid grid-cols-2 gap-3 mb-6">
                      <div className="bg-gray-800/40 rounded-xl p-3 text-center">
                        <div className="w-8 h-8 bg-gradient-to-r from-pink-500/20 to-rose-500/20 rounded-lg flex items-center justify-center mx-auto mb-2">
                          <svg
                            className="w-4 h-4 text-pink-400"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
                          </svg>
                        </div>
                        <div className="text-white text-xs">Matches</div>
                      </div>
                      <div className="bg-gray-800/40 rounded-xl p-3 text-center">
                        <div className="w-8 h-8 bg-gradient-to-r from-pink-500/20 to-rose-500/20 rounded-lg flex items-center justify-center mx-auto mb-2">
                          <svg
                            className="w-4 h-4 text-pink-400"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fillRule="evenodd"
                              d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </div>
                        <div className="text-white text-xs">Messages</div>
                      </div>
                    </div>

                    {/* Bottom Navigation */}
                    {/* <div className="absolute bottom-6 left-0 right-0 px-6">
                      <div className="flex justify-around">
                        <div className="text-center">
                          <div className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center mx-auto mb-1">
                            <div className="w-3 h-3 bg-gradient-to-r from-pink-500 to-rose-500 rounded-full"></div>
                          </div>
                          <div className="text-xs text-white">Projects</div>
                        </div>
                        <div className="text-center">
                          <div className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center mx-auto mb-1">
                            <svg
                              className="w-4 h-4 text-gray-400"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                            >
                              <path d="M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0114.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0014.5 4c-1.255 0-2.443.29-3.5.804V12a1 1 0 11-2 0V4.804z" />
                            </svg>
                          </div>
                          <div className="text-xs text-gray-400">Docs</div>
                        </div>
                        <div className="text-center">
                          <div className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center mx-auto mb-1">
                            <svg
                              className="w-4 h-4 text-gray-400"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                            >
                              <path
                                fillRule="evenodd"
                                d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                                clipRule="evenodd"
                              />
                            </svg>
                          </div>
                          <div className="text-xs text-gray-400">Profile</div>
                        </div>
                      </div>
                    </div> */}
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-r from-pink-500/20 to-rose-500/20 rounded-2xl blur-xl"></div>
              <div className="absolute -bottom-4 -left-4 w-20 h-20 bg-gradient-to-r from-pink-600/20 to-rose-600/20 rounded-2xl blur-xl"></div>
            </div>
          </div>

          {/* Right side - Content */}
          <div className="text-white">
            <div className="mb-8">
              <h2 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
                DOWNLOAD <br />
                <span className="bg-gradient-to-r from-pink-400 to-rose-400 bg-clip-text text-transparent">
                  Dill keh rishta App
                </span>
              </h2>

              <div className="text-2xl md:text-3xl leading-relaxed mb-8">
                <div className="opacity-90">
                  Find your perfect match
                </div>
                <div className="opacity-80">and build meaningful</div>
                <div className="opacity-90 font-medium">
                  relationships with confidence.
                </div>
              </div>
            </div>

            {/* App Store Button */}
            <div className="mb-10">
              <div className="text-lg mb-3 opacity-80">Download on the</div>
              <button className="group relative bg-gradient-to-r from-gray-800 to-gray-900 rounded-2xl p-4 pl-6 pr-8 flex items-center justify-between w-full max-w-md shadow-2xl hover:shadow-pink-500/20 hover:shadow-xl transition-all duration-300 border border-gray-700 hover:border-pink-500/30">
                <div className="flex items-center">
                  <div className="mr-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-gray-700 to-gray-800 rounded-xl flex items-center justify-center">
                      <svg
                        className="w-7 h-7 text-white"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M12,4A8,8 0 0,0 4,12C4,14.86 5.5,17.5 8,18.93C8,18.66 8,18.4 8,18.13C8,17 8.14,15.89 8.39,14.82C7.56,14.5 6.84,13.97 6.3,13.28C6,12.83 5.85,12.27 6,11.77C6.2,11.16 6.5,10.61 6.91,10.15C7.66,9.22 8.78,8.66 10,8.58C11.28,8.5 12.54,8.95 13.42,9.85C14.12,10.56 14.53,11.5 14.58,12.5C14.64,13.67 14.14,14.81 13.22,15.59C12.8,15.95 12.5,16.42 12.33,16.95C12.22,17.27 12.16,17.6 12.15,17.94C12.14,18.08 12.14,18.22 12.14,18.36C14.5,17.55 16,14.92 16,12C16,9.08 14.5,6.45 12,5.64V4Z" />
                      </svg>
                    </div>
                  </div>
                  <div className="text-left">
                    <div className="text-sm opacity-70">App Store</div>
                    <div className="text-2xl font-bold">4.9</div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold">Dill keh rishta</div>
                  <div className="text-sm opacity-70 flex items-center">
                    Available on the
                    <svg
                      className="w-4 h-4 ml-1"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M18.71,19.5C17.88,20.74 17,21.95 15.66,21.97C14.32,22 13.89,21.18 12.37,21.18C10.84,21.18 10.37,21.95 9.1,22C7.79,22.05 6.8,20.68 5.96,19.47C4.25,17 2.94,12.45 4.7,9.39C5.57,7.87 7.13,6.91 8.82,6.88C10.1,6.86 11.32,7.75 12.11,7.75C12.89,7.75 14.37,6.68 15.92,6.84C16.57,6.87 18.39,7.1 19.56,8.82C19.47,8.88 17.39,10.1 17.41,12.63C17.44,15.65 20.06,16.66 20.09,16.67C20.06,16.74 19.67,18.11 18.71,19.5M13,3.5C13.73,2.67 14.94,2.04 15.94,2C16.07,3.17 15.6,4.35 14.9,5.19C14.21,6.04 13.07,6.7 11.95,6.61C11.8,5.46 12.36,4.26 13,3.5Z" />
                    </svg>
                  </div>
                </div>

                {/* Glow effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-pink-500/5 to-rose-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
            </div>

            {/* Additional Info */}
            <div className="grid grid-cols-2 gap-6 max-w-md">
              <div className="bg-gray-800/30 rounded-xl p-4 border border-gray-700/50">
                <div className="text-2xl font-bold mb-1">50K+</div>
                <div className="text-sm opacity-70">Active Users</div>
              </div>
              <div className="bg-gray-800/30 rounded-xl p-4 border border-gray-700/50">
                <div className="text-2xl font-bold mb-1">4.8</div>
                <div className="text-sm opacity-70">Google Play Rating</div>
              </div>
            </div>

            {/* Features List */}
            <div className="mt-8 max-w-md">
              <div className="text-lg font-semibold mb-4 text-pink-300">
                Featured Features:
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-pink-500 rounded-full mr-2"></div>
                  <span className="text-sm opacity-80">Smart Matching</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-pink-500 rounded-full mr-2"></div>
                  <span className="text-sm opacity-80">Profile Verification</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-pink-500 rounded-full mr-2"></div>
                  <span className="text-sm opacity-80">Secure Chat</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-pink-500 rounded-full mr-2"></div>
                  <span className="text-sm opacity-80">Privacy Controls</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppDownload;
